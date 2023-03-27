import bcrypt from "bcrypt";

const createHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
};

const isValidPassword = (user, password) => {
    let resultado = bcrypt.compareSync(password, user.password);
    return resultado;
} 

export { createHash, isValidPassword };