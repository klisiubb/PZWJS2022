import { Request,Response } from "express"
import 'connect-flash'
const index = (req:Request, res:Response) => {
    res.render('home', {formMessage: req.flash('form')});
}

export default {
    index
}