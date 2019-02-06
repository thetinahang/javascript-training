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
// how many different numbers can we express with 1 byte?
// 2^8 = 256 different numbers. How did we know to take 2^8??
// beware of integer overflow --> What happens if we have the number 255 in an 8-bit unsigned integer (1111 1111 in binary) and we add 1? The answer (256) needs a 9th bit (1 0000 0000). But we only have 8 bits!; At best, we might just get an error. At worst, our computer might compute the correct answer but then just throw out the 9th bit, giving us zero (0000 0000) instead of 256 (1 0000 0000)! (Javascript automatically converts the result to Infinity if it gets too big.)
// 256 possibilities
// so we usually use 4 or 8 bytes (32 or 64 bits) for storing intgers
// 32-bit integers have 2^32 possible values—more than 4 billion
// 64-bit integers have 2^64 possible values—more than 10 billion billion 
// in some languages like Java and C, some numbers are Integers and some are Longs -- the different is the number of bits. 
// in java, Integers are 32 bits and Longs are 64
// a table in SQL, you have to specify the bytes when a column holds integers
// when is 32 bits not enough? when you're counting views on a viral video --> youtube
// most integers are fixed-width or fixed-length, which means the number of bits they take up doesn't change
// usually safe to assume an integer is fixed-width, unless told otherwise
// variable-size numbers exist, but only used in special cases
// If we have a 64-bit fixed-length integer, it doesn't matter if that integer is 0 or 193,457—it still takes up the same amount of space in RAM: 64 bits.
// Are you familiar with big O notation? It's a tool we use for talking about how much time an algorithm takes to run or how much space a data structure takes up in RAM.
// O(1) space is much smaller than O(n) space. And O(1) time is much faster than O(n) time
// fixed-width integers take up constant space or O(1) space
// because they have a constant number of bits, most simple operations on fixed-width integers (addition, subtraction, multiplication, division) take constant time (O(1) time)
// fixed-width integers are very space efficient and time efficient
// that efficiency comes at a cost—their values are limited
// Specifically, they're limited to 2^n possibilities, where n is the number of bits


// Arrays
//
// about storing several numbers
// RAM --> array
// the elements of an array are numbered --> that number is the index of the array element (plural: indices)
// we usually use 64-bit integers
// how do we build an array of 64-bit (8 byte) integers on top of our 8-bit (1 byte) memory slots?
// we simply give each array index 8 address slots instead of 1
// can still use simple math to grab the start of the nth item in our array -- just gotta throw in some multiplication
// Remember: addition, subtraction, multiplication, and division of fixed-width integers takes O(1) time. So all the math we're using here to get the address of the nth item in the array takes O(1) time.
// the memory controller has a direct connection to each slot in RAM
// we can read the stuff at any given memory address in O(1) time
// this means looking up the contents of a given array index is O(1) time
// This fast lookup capability is the most important property of arrays
// But the formula we used to get the address of the nth item in our array only works if:
// 1. Each item in the array is the same size (takes up the same number of bytes).
// 2. The array is uninterrupted (contiguous) in memory. There can't be any gaps in the array...
// These things make our formula for finding the nth item work because they make our array predictable. We can predict exactly where in memory the nth element of our array will be
// they also constrain what kinds of things we can put in an array. Every item has to be the same size
// if our array is going to store a lot of stuff, we'll need a bunch of uninterrupted free space in RAM. Which gets hard when most of our RAM is already occupied by other programs
// tradeoff: Arrays have fast lookups (O(1) time), but each item in the array needs to be the same size, and you need a big block of uninterrupted free memory to store the array




// Strings
// Pointers
// Dynamic Arrays
// Linked Lists
// Hash Tables