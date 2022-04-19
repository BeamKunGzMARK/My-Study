fn main() {
    let mut n = 10;

    loop {
        n += 1;

        if n <= 11 { // n === 11 pass loop it doesn't print. //
            continue;
        }

        if n > 100 {
            break;
        }

        println!("The value of n is {}",n)
    }
}