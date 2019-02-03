// Data Structures Lesson 1

// Random Access Memory (RAM)
//
// when a computer is running code, it needs to keep track of variables (numbers, strings, arrays, etc)
// variables are stored in RAM --> working memory, or just memory
// While memory is where we keep the variables our functions allocate as they crunch data for us, storage is where we keep files like mp3s, videos, Word documents, and even executable programs or apps.
// Memory (or RAM) is faster but has less space, while storage (or "disc") is slower but has more space.
// analogy of a shelf for RAM
// shelves are numbered --> address
// each shelf holds 8 bits
// a bit is either 1 or 0, on or off
// 8 bits is called a byte, each shelf has one byte of storage
// processor that does all the real work inside our computer
// connected a memory controller --> does the actual raeding and writing to and from RAM; direct connection
// direct connection --> can access address 918,873 without having to climb down
// programs tend to access memory that's nearby
// so computers are runed to get an extra speed boost when reading memory addresses that are close to each other
// The processor has a cache where it stores a copy of stuff it's recently read from RAM.
// This cache is much faster to read from than RAM, so the processor saves time whenever it can read something from cache instead of going out to RAM.
// When the processor asks for the contents of a given memory address, the memory controller also sends the contents of a handful of nearby memory addresses. 
// And the processor puts all of it in the cache.
// So reading from sequential memory addresses is faster than jumping around.


// Binary Numbers
//
// base 2 --> binary
// the places in binary are sequential powers of 2
// unsigned integers --> unsigned: non-negative; integers: whole numbers
// numbers can be stored as fractions, decimals, negative numbers
// fractions: Store two numbers: the numerator and the denominator
// decimals: Also two numbers: 1) the number with the decimal point taken out, and 2) the position where the decimal point goes (how many digits over from the leftmost digit)
// negative numbers: Reserve the leftmost bit for expressing the sign of the number. 0 for positive and 1 for negative


// Fixed-Width Integers
//
// 


// Arrays
// Strings
// Pointers
// Dynamic Arrays
// Linked Lists
// Hash Tables