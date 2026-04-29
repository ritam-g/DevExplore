// src/index.js

import axios from "axios";

export class CodeBloded {
    constructor({ apiKey, baseURL = `http://localhost:3000` }) {
        if (!apiKey) throw new Error("API Key is required");
        if (!baseURL) throw new Error("Base URL is required");

        this.apiKey = apiKey;
        this.baseURL = baseURL;
    }

    async reportIncident({ message, service, severity = "medium" }) {
        try {
            const response = await axios.post(
                `${this.baseURL}/incident`,
                {
                    message,
                    service,
                    severity
                },
                {
                    headers: {
                        "x-api-key": this.apiKey,
                        "Content-Type": "application/json"
                    }
                }
            );

            return response.data;
        } catch (error) {
            console.error("Error reporting incident:", error.message);
            throw error;
        }
    }
}