use typename::TypeName;
fn main() {

    let numbers = 1..100;
    for i in numbers {
        println!("The number is {}",i); // 1 -> 99 //
    }

    let array = vec!["Cat","Dog","Tiger"];


    for a in array.iter() { //? get only item //
        println!("The animal is {}",a);
    }


    for (index,a) in array.iter().enumerate() {
        println!("The type is {}",index.type_name_of());
        println!("The index is {} and The animal is {}",index,a);
    }
}