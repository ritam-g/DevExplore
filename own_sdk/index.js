import { AlertForge } from "alertforge-sdk";

const af = new AlertForge({
    apiKey: "af_63ef7a4b5e056885eefbaae4e261794a1c288ca31758e48008e23e7b1fe26034",
    baseURL: "https://alertforge.onrender.com"
});

async function run() {
    try {
        // 1. Setup profile (IMPORTANT FIRST STEP)
        await af.updateProfile({
            name: "On-Call Engineer",
            teamEmails: ["Mustafaramakda34@gmail.com", "ritammaty2003@gmail.com", "ritammaty2006@gmail.com", "ritammaty@gmail.com",
                "dev1@test.com",
                "dev2@test.com",
                "soumiisc2020@gmail.com"],
            discordWebhookUrl: "https://discord.com/api/webhooks/1499679342286999733/yZArjF9q68goc_9r0MQVbqWBbMRF7wWNFhHVkC00Za5Q04Ndei8zuHqTob3FSrqDDn3d",
            telegramChatId: "8593526739",
            notificationSettings: {
                emailEnabled: true,
                discordEnabled: true,
                telegramEnabled: true
            }
        });

        console.log("✅ Profile configured");

        // 2. Create incident
        const incident = await af.createIncident({
            title: "High Error Rate in Checkout Service",
            service: "payments-api",
            severity: "P1"
        });

        console.log("🚨 Incident created:", incident.data?._id);

        // 3. List incidents
        const list = await af.getIncidents();
        console.log("📦 Total incidents:", list.data?.incidents?.length);

        // 4. Update status
        const id = incident.data?._id;
        await af.updateIncidentStatus(id, "resolved");
        console.log("✅ Incident resolved");

        // 5. Generate postmortem
        await af.generatePostmortem(id);
        console.log("🧠 Postmortem triggered");

    } catch (err) {
        console.error("❌ Error:", err.message);
    }
}

run();