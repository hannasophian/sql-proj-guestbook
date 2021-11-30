export default async function deleteSignature(id: number) {
  try {
    const response = await fetch(`http://localhost:4000/signatures/${id}`, {
      method: "DELETE",
      // headers: {"Content-Type":"application/json"},
      // body: JSON.stringify(body)
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
