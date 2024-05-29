/**
 * Fonction de connexion à la base de données MongoDB.
 * Utilise mongoose pour établir une connexion asynchrone avec MongoDB en utilisant l'URL fournie
 * dans les variables d'environnement. Affiche un message de succès en magenta si la connexion est 
 * établie avec succès, ou un message d'erreur en rouge si la connexion échoue.
 
 */


import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB `.magenta.bold);
    } catch (error) {
        console.log(`Err in MongoDB ${error}`.red.bold);
    }
}


export default connectDB;