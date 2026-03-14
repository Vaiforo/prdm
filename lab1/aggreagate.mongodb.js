db.t_contract.aggregate([
    {
        $match: {
            client_id: 1
        }
    },
    {
        $lookup: {
            from: "t_agent",
            localField: "agent_id",
            foreignField: "agent_id",
            as: "agentInfo"
        },
    }
]);