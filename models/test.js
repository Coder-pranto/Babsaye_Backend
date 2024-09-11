



exports.getBankAccounts = async (req, res) =>{
    try {
        const accounts = await BankAccount.find().populate('transaction');
        res.json(accounts);
    } catch (error) {
        res.status(500).json({error: 'Server Error'});
    }
}

exports.createBankAccount = async (req,res)=>{
    const {bankName, accountNumber, balance} = req.body;

    try {
        const newAccount = new BankAccount({bankName, accountNumber, balance});
        await newAccount.save();
        res.json(newAccount);
    } catch (error) {
        res.status(500).json({error : "server error"});
    }
}

exports.depositFunds = async (req, res) =>{
    const {accountId, amount} = req.body;
    try {
        const newTransaction = new Transactionbank({type:'deposit', amount, toAccount:accountId});
        await newTransaction.save();
        res
    } catch (error) {
        
    }
}

exports.transferFunds = async(req, res) =>{
    const {fronmAccountId, toAccountId, amount} = req.body;
    try {
        const newTransaction = new Transactionbank({
            type:'transfer',
            amount,
            fromAccount: fronmAccountId,
            toAccount: toAccountId
        });
        await newTransaction.save();
        res.json({message: 'transfer successful', transaction: newTransaction});
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}