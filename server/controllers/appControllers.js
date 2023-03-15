export async function register(req, res) {
    res.json('register');
};
export async function login(req, res) {
    res.json('login');
};
export async function getUser(req, res) {
    res.json('get user');
};
export async function updateUser(req, res) {
    res.json('updateUser');
};
export async function generateOTP(req, res) {
    res.json('generateOTP');
};
export async function verifyOTP(req, res) {
    res.json('verifyOTP');
};
export async function createResetSession(req, res) {
    res.json('createResetSession');
};
export async function resetPassword(req, res) {
    res.json('resetPassword');
};