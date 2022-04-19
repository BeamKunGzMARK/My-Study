use std::io;

fn main(){
    println!("Guess the number!");

    println!("Please input your guess.");

    //? สร้างตัวแปรที่เป็น String //
    let beam = "HI"; /*  แก้ไขไม่ได้ */
    let mut guess = String::new(); /* แก้ไขได้ */


    //? รับเข้า input ค่า //
    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);
    println!("Beam : {}",beam)
}
