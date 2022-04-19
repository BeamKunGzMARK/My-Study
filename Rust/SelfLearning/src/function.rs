//? to print type of the value => use typename::TypeName //

fn main() {
   
    print_the_value(30,String::from("Hello"),false,4.2);

}

fn print_the_value(num:u32,text:String,boolean: bool,float: f64) {

    println!("The number is {} and the string is {}",num,text);
    println!("The boolean is {} and float number is {}",boolean,float);

    println!("The return boolean is {}",return_the_boolean(boolean));

}

fn return_the_boolean(boolean: bool) -> bool {
    return boolean;
}