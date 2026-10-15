import { Address } from "./Address"
import { Category } from "./Category"
import { Customer } from "./Customers"
import { Order } from "./Order"
import { Product } from "./Product"

Category.hasMany(Product) 
Product.belongsTo(Category)

Customer.hasMany(Order)
Customer.hasMany(Address)

Address.belongsTo(Customer)
Address.hasMany(Order)

Order.belongsTo(Customer)
Order.belongsTo(Address)
export{
Category, Product, Customer, Order, Address
}