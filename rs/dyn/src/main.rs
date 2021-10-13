use std::fs::File;
use std::io::Read;

fn main() {
    let mut reader: Box<dyn Read> = Box::new(File::open("Cargo.toml").unwrap());

    process_file(&mut reader);
}

fn process_file(reader: &mut Box<dyn Read>) {
    let mut buf = String::new();

    reader.read_to_string(&mut buf).unwrap();

    println!("{}", buf);
}
