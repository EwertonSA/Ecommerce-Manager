import { Sequelize } from "sequelize";

export const sequelize= new Sequelize({
    dialect:"postgres",
    host:'localhost',
    port:5432,
    database:'ECommerce',
    username:'postgres',
    password:'MALVADAPINGA',
    define:{underscored:true}
})