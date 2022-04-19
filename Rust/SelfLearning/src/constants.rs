const MAX_NUMBER: u8 = 20;

fn main() {
    for n in 1..MAX_NUMBER {
        println!("{}", n);
    }

    // ! ERROR ->  MAX_NUMBER = 30; //
}