import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";

export const signIn: RequestHandler = async (req, res, next) => {
    const { email, password, action } = req.body.user; // action if true - login, else signup

    console.log(action);
    let success;
    let message;
    let userId;

    // LOGIN
    if (action) {
        // SALĪDZINĀT DATUS AR DATUBĀZI
        let userEmail = "martins.meisters@inbox.lv";
        let userPassword = "123";

        if (email === userEmail && password === userPassword) {
            success = true;
            message = "Success on signing in.";
            userId = uuidv4();
        } else {
            success = false;
            message = "Failed to login! Check you credentials.";
        }

        if (success) {
            return res.json({
                message,
                userId: userId,
                status: success,
            });
        } else {
            return res.json({
                message,
                status: success,
            });
        }
    }

    // REGISTER
    if (!action) {
        let userEmail = "martins.meisters@inbox.lv";
        // PĀRBAUDĪT DB DATUS
        // * vai mails jau nav reģistrēts, ja ir tad errors, ja nav tad piereģistrēt useru
        if (email === userEmail) {
            success = false;
            message = "Email already exists!";
        } else {
            success = true;
            userId = "UserId1000";
            message = "Success on signup!";
        }

        if (success) {
            return res.json({
                message,
                userId,
                status: success,
            });
        } else {
            return res.json({
                message,
                status: success,
            });
        }
    }
};
