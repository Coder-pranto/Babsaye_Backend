const Client = require('../models/client');
const fs = require('fs');
const path = require('path');

const createClient = async (req, res) => {
  try {
    const { idNo, name, companyName, address, phoneNumber, phoneNumber2, previousDue, email, dateOfBirth, upzilla, streetOrRoad, reference, zipCode, clientGroup, status } = req.body;
    const image = req.file ? req.file.path : null;

    const newClient = new Client({
      idNo, name, companyName, address, phoneNumber, phoneNumber2, previousDue, email, dateOfBirth, upzilla, streetOrRoad, reference, zipCode, clientGroup, image, status
    });

    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getClients = async (req, res) => {
  try {
    const clients = await Client.find().populate('clientGroup');
    res.status(200).json(clients);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id).populate('clientGroup');
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    const { idNo, name, companyName, address, phoneNumber, phoneNumber2, previousDue, email, dateOfBirth, upzilla, streetOrRoad, reference, zipCode, clientGroup, status } = req.body;
    const image = req.file ? req.file.path : client.image;

    if (req.file && client.image) {
      fs.unlinkSync(client.image);
    }

    client.idNo = idNo || client.idNo;
    client.name = name || client.name;
    client.companyName = companyName || client.companyName;
    client.address = address || client.address;
    client.phoneNumber = phoneNumber || client.phoneNumber;
    client.phoneNumber2 = phoneNumber2 || client.phoneNumber2;
    client.previousDue = previousDue || client.previousDue;
    client.email = email || client.email;
    client.dateOfBirth = dateOfBirth || client.dateOfBirth;
    client.upzilla = upzilla || client.upzilla;
    client.streetOrRoad = streetOrRoad || client.streetOrRoad;
    client.reference = reference || client.reference;
    client.zipCode = zipCode || client.zipCode;
    client.clientGroup = clientGroup || client.clientGroup;
    client.image = image;
    client.status = status || client.status;

    await client.save();
    res.status(200).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    if (client.image) {
      fs.unlinkSync(client.image);
    }

    await client.remove();
    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient
};
