fn main() {
    let tuple = (20,true,"Rust",3.4,(1,false,"Hello"));

    println!("{}",tuple.4.0);

    let (i0,i1,i2,i3,i4) = tuple;

    println!("index 0 is {}",i0);
    // ! can't print all typle -> println!("index 4 is {}",i4); //
   
}