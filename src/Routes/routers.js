let routers = [
    {
        path: "*",
        redirect: "/transac-dashboard"
    },
    {
        path: "/home",
        exact: false,
        element: "MainLayout",
        children: [
            {
                path: "/transaction-dashboard",
                exact: true,
                element: "TransactionDashboard"
            }
        ]
    },
    {
        path: "/transac-dashboard",
        exact: true,
        element: "TransancDashboard",
    }
]

export {routers};