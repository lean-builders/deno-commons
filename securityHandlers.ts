import express from "express";
import axios from "axios";

export const securityHandlers = {
    bearerAuth: (req: express.Request) => new Promise(async (resolve) => {
        if (!req.headers.authorization) {
            console.warn('no Authorization header');
            resolve(false);
            return;
        }
        const matched = req.headers.authorization.match(/^Bearer\s+(\S+)/);
        if (! matched) {
            console.warn('illegal Authorization header');
            resolve(false);
            return;
        }
        const verified = await axios.get(`${process.env.URL_BACKEND_SERVICE_TOKEN}/token`, {
            headers: req.headers
        });
        console.log({ verified });
        if (verified.status === 200) {
            // @ts-ignore
            req.user = {
                id: verified.data.id
            };
            resolve(true);
        }
        console.warn({ verified });
        resolve(false);
    })
};

