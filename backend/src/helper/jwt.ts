import jwt from "jsonwebtoken";

const KEY =
  "e96f79bb511cc6c9314638d48b3f10d43665f4883d48bcdc71ca52e096e1c8b35ee79e1e7123ed9440f92b3324b3bda0964abe9b2fa3380eb64d8dca8768e636ce880235049d89647cc064d0191475bb88e86b9673b70ad6eb4cc224992ba86e6639af0dcd76f5d90c02554ad70252f48c12a931ef14d4b00ef4b6f68a0970f636ac1803407075fa95581fc9e24e353fec5fe3c5d814de8ffb9df0217b2114413600e926ef8ec1603b817b552d9eb8c553ac5ae1978d74fa60d9e7a4ec693f67a8b318cda4cb6d65f84c9353eb12bf68852a17ba2eac89112dca00f2da204f59a2d6b0aa09af4c88aa59727f98a89ee2be97e6ba57cd2fd805caeaa44e8dca8621af913ba1ffb341c8588622cc28cf10b3d3a92a9210a62f3078c2a1a3740ca4966e3b0014e29a7837b6c5d7cb6f680967e61a70c5b998f6ada85edb12503d7a99c53a41f32c6f9911c40b5fade8bf8906f0f1e60a90fac1141b774fc0a2467e9659381e167f5f4c35cc4032a6db1e1a4cbe6fe683bd96b3313e8569c1b65622747261d7cf980d389e2e5ba2c3b4e59bd819b2c26387c015ddc3abe004335dd5c373a92a8db0f1d35af1c1ceea26495a38110016d206e8091d558b04a7c34f4b0c401d1f9a963565d3f7406454f15a68380e2efdb62becc38a44906e86290bea1a5b3b5f764077263dc0d44f7491a4ceb2c5c27673821474e502aa215c4d991ee20e148ad47078656d967bdefaa8ca16772543f8c2f804ccebd22ad9c83b365c2dab87fcd4b1fc938b3edf15ee7438013bb9e92f1bd29174a34c013c4482dcf1752969c99313cda7db98f1e3b1ffbe9618bf16f5d216b3cf88c16495e6248e18bbdac016504fd28689193d1b11990ea758d66d0a75d369271887abd4400cd3c0259fed0dadc484a3b35eae63ade2d60996a074e49ec4fef5ff242854dbf085e2345c85198ddf912ef4bbac56d85a43baf45d8cf4db59f90164c98f6b1ff37323f0a6f1fe28f2d9a29d6ecad98ea91c9c4ee0335fc3a812ee98ec0f9bc744b7b013c1f7332fb5df860cb356444c74cfbc2f56d5f875940f872091a54a93675de96d60cfbdfaa9eb220869fbb344b23eb3c4c367285f2865a35e20ccdfee55c91e3430a50b02e5a04739258c993d084b0ca97f4ddee29ffcf056ed807ff4a8a006a779b848fb1099cd9ef4cd5a682d9a6309cde0e039ca84878cb25c6f12a4e243b0f3a77016fd7561d00ef47c0eaee75618d43a122737f8d289b5dfd81f06a4d0b615132461f3aa07fa7d77fa411ddc03211866e947aaaf072eaecddd144efbdb01bf1e451db3288d8b365301eae94e10cb85b722d1f6bc8946da947be666a4e48b8aa0e558a3cd030d06a3bd498dbb498f98f61fa049dd5ee51f1fc04b415fe7207127f353868469ee6c21d58cb4d788d93b3bc7721dd5288ac2a1aed5fbe32a";

export const createToken = (data: { id: string }) => jwt.sign(data, KEY);

export const verifyToken = (token: string) => jwt.verify(token, KEY);
