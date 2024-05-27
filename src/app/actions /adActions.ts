"use server";

export async function createAd(formData: FormData) {
  const {files, ...data} = Object.fromEntries(formData);
  console.log('{files, data}: ', {server: 1, files, data});
  return true;
}