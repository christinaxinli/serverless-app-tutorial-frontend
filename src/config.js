export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_Wp51ByHXhjzhqKtkKBo5CsnR001IpnSb28",

    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-tutorial-1010"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://1zn04jkyog.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_3nyX1nGWh",
        APP_CLIENT_ID: "61vsb0hjgf74nggjod1vbcvlou",
        IDENTITY_POOL_ID: "us-east-2:d139c00e-95f3-475f-9d6d-6cd50e1c579a"
    }
};