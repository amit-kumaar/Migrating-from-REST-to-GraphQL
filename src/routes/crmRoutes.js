import { addNewContact,getContacts,getContactWithID,updateContact,deleteContact } from "../controllers/crmController.js";

const routes = (app) => {
  app
    .route("/contact")

    .get(
      (req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type : ${req.method}`);
        next();
      },getContacts)

    .post(addNewContact);//post new contact

 app.route("/contact/:contactId")//get all contacts
    .get(getContactWithID)//get specific contact
    .put(updateContact)//update contact
    .delete(deleteContact)//delete contact
};

export default routes;
