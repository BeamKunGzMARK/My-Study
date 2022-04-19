use std::fmt;

enum Ticket {
    Regular(i32),
    Student(i32),
    Child(i32),
    Senior(i32),
}

#[derive(Debug)]
#[derive(PartialEq)]
enum statusOfTicket {
    Invalid,
    Valid,
}

enum Tickets {
    Regular { price :i32,status: statusOfTicket },
    Student { price :i32,status: statusOfTicket },
    Child { price :i32,status: statusOfTicket },
    Senior { price :i32,status: statusOfTicket },
}

fn main() {
    let student:Ticket = Ticket::Student(10);

    let statusOfTicketStudent:statusOfTicket = statusOfTicket::Valid;

    let regularTickets:Tickets = Tickets::Regular{price:20,status:statusOfTicket::Valid};

    match student {
        Ticket::Regular(i32) => println!("Regular ticket price is {}", i32),
        Ticket::Student(i32) => println!("Student ticket price is {}", i32),
        Ticket::Child(i32) => println!("Child ticket price is {}", i32),
        Ticket::Senior(i32) => println!("Senior ticket price is {}", i32)
    }

    match statusOfTicketStudent {
        statusOfTicket::Invalid => println!("Invalid Ticket"),
        statusOfTicket::Valid => println!("Valid Ticket")
    }

    match regularTickets {
        Tickets::Regular { price,status} => { if status == statusOfTicket::Valid { println!("status is {:?}",status) }},
        Tickets::Student { price,status } => println!("Student ticket price is {}", price),
        Tickets::Child { price,status } => println!("Child ticket price is {}", price),
        Tickets::Senior { price,status } => println!("Senior ticket price is {}", price)
    }


}