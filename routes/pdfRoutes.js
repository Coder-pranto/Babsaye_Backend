const router = require('express').Router();
const PDFDocument = require('pdfkit');
const Invoice = require('../models/invoice');

router.get('/invoice/:id/print', async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id).populate('client').populate('products.product');
        if (!invoice) {
            return res.status(404).send('Invoice not found');
        }

        const doc = new PDFDocument({ margin: 50 });

        // Configure headers and footers
        const header = () => {
            doc
                .fontSize(20)
                .text("Company Name", { align: "center" })
                .fontSize(10)
                .text("Company Address", { align: "center" })
                .text("Company Phone", { align: "center" })
                .moveDown();
        };

        const footer = () => {
            doc
                .fontSize(10)
                .text(`Invoice generated on ${new Date().toLocaleDateString()}`, 50, 750, {
                    align: "center",
                    width: 500
                });
        };

        res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
        res.setHeader('Content-Type', 'application/pdf');

        doc.pipe(res);

        header();

        const billAmount = invoice.billAmount ? invoice.billAmount.toFixed(2) : '0.00';
        const discount = invoice.discount ? invoice.discount.toFixed(2) : '0.00';
        const receiveAmount = invoice.receiveAmount ? invoice.receiveAmount.toFixed(2) : '0.00';
        const dueAmount = invoice.dueAmount ? invoice.dueAmount.toFixed(2) : '0.00';

        doc
            .fontSize(25)
            .text(`Invoice: ${invoice._id}`, { align: 'center' })
            .moveDown()
            .fontSize(16)
            .text(`Client: ${invoice.client.name}`, { align: 'left' })
            .moveDown()
            .text(`Date: ${new Date(invoice.date).toLocaleDateString()}`, { align: 'left' })
            .moveDown()
            .text(`Due Amount: $${dueAmount}`, { align: 'left' })
            .moveDown();

        // Adding product details in a table
        doc.fontSize(14).text('Products:', { underline: true });

        doc.moveDown();
        const tableTop = doc.y;
        const itemColumn = 50;
        const descriptionColumn = 200;
        const priceColumn = 400;
        const quantityColumn = 460;
        const totalColumn = 520;

        doc
            .fontSize(12)
            .text("Item", itemColumn, tableTop, { bold: true })
            .text("Description", descriptionColumn, tableTop)
            .text("Unit Price", priceColumn, tableTop)
            .text("Quantity", quantityColumn, tableTop)
            .text("Total", totalColumn, tableTop);

        doc.moveDown();
        let i = 0;
        const itemStartY = tableTop + 25;
        invoice.products.forEach(product => {
            const productPosition = itemStartY + (i * 25);
            const unitPrice = product.unitPrice ? product.unitPrice.toFixed(2) : '0.00';
            const quantity = product.quantity || 0;
            const totalPrice = product.unitPrice ? (product.unitPrice * product.quantity).toFixed(2) : '0.00';

            doc
                .text(product.product.name, itemColumn, productPosition)
                .text(product.product.description, descriptionColumn, productPosition)
                .text(`$${unitPrice}`, priceColumn, productPosition)
                .text(quantity, quantityColumn, productPosition)
                .text(`$${totalPrice}`, totalColumn, productPosition);
            i++;
        });

        doc.moveDown(2);

        // Summary
        doc
            .fontSize(14)
            .text('Summary', { underline: true })
            .moveDown()
            .fontSize(12)
            .text(`Total Bill Amount: $${billAmount}`)
            .text(`Total Discount: $${discount}`)
            .text(`Total Receive Amount: $${receiveAmount}`)
            .text(`Total Due Amount: $${dueAmount}`)
            .moveDown();

        // Footer
        footer();

        doc.end();
    } catch (error) {
        console.error('Error generating invoice PDF:', error.message);

        // Ensure the response is not written to after it's closed
        if (!res.headersSent) {
            res.status(500).send('Error generating PDF');
        }
    }
});

module.exports = router;
