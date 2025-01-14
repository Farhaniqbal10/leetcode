/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  /*
  Mencari dua angka dalam daftar yang jika dijumlahkan akan menghasilkan target yang ditentukan.
  
  Args:
      nums: Daftar angka.
      target: Jumlah target.
  
  Returns:
      Array berisi indeks dua angka yang jika dijumlahkan akan menghasilkan target.
  */
  
  // Membuat objek kosong untuk menyimpan angka komplement beserta indeksnya
  const complementMap = {};

  // Melakukan perulangan untuk setiap angka dalam daftar
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    // Memeriksa apakah komplementnya ada dalam objek
    if (complementMap[complement] !== undefined) {
      // Mengembalikan indeks dua angka tersebut
      return [complementMap[complement], i];
    }

    // Menambahkan angka saat ini beserta indeksnya ke dalam objek
    complementMap[num] = i;
  }

  // Jika solusi tidak ditemukan, mengembalikan array kosong
  return [];
}
