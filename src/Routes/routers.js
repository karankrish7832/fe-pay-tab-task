let routers = [
    {
        path: "*",
        redirect: "/home/transaction-dashboard"
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
    }
]

export {routers};