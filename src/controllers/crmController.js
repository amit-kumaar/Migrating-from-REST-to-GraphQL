import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel.js";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = async (req, res) => {
  try {
    const contact = await new Contact(req.body).save();
    res.send(contact);
  } catch (err) {
    res.send(err);
  }
};

export const getContacts = async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.json(contact);
  } catch (err) {
    res.send(err);
  }
};

export const getContactWithID = async(req,res)=>{
    try{
        const contact = await Contact.findById(req.params.contactId)
        res.json(contact)
    }catch (err){
        res.send(err);
    }
};

export const updateContact = async (req,res)=>{
    try{
        const contact = await Contact.findOneAndUpdate(
            {_id:req.params.contactId},
            req.body,
            {new:true}
        )
        res.json(contact)
    }catch (err){
        res.send(err);
  }
};

export const deleteContact = async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.contactId });
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.send(err);
  }
};


