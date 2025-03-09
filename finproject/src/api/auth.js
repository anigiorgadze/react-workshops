const API_BASE_URL = "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth";

export async function authHandler(action, user) {
    try {
        const response = await fetch(`${API_BASE_URL}/${action}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorResult = await response.json();
            throw new Error(errorResult.msg || "Authentication failed.");
        }

        const result = await response.json();
        console.log("✅ API Response Data:", result); // ✅ API პასუხის ლოგირება

        if (!result || !result.token) {
            throw new Error("Invalid response from server: Token is missing.");
        }

        return result;
    } catch (error) {
        console.error("❌ API Request Error:", error);
        throw error;
    }
}
