import { Address } from "./Address"
import { Category } from "./Category"
import { Customer } from "./Customers"
import { Order } from "./Order"
import { OrderItems } from "./OrderItems"
import { Product } from "./Product"
import { User } from "./Users"
Category.hasMany(Product) 
Product.belongsTo(Category)
Product.hasMany(OrderItems)

Customer.hasMany(Order)
Customer.hasMany(Address)

Address.belongsTo(Customer)
Address.hasMany(Order)

Order.belongsTo(Customer)
Order.belongsTo(Address)
Order.hasMany(OrderItems)

OrderItems.belongsTo(Order)
OrderItems.belongsTo(Product)

export{
Category, Product, Customer, Order, Address, User
}