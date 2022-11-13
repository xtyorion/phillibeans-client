
export async function Login () {
  const API_URL = import.meta.env.VITE_API_URL
  let formData = new FormData();
  formData.append('Name', 'a');
  formData.append('Email', 'a@a.a');
  formData.append('Password', 'a');
  const settings = {
    method: 'POST',
    body: formData
};
  const actualData = await fetch(
    API_URL + `Login`, settings
    )
    .then(response => response.json())
    .catch(error => console.log("setError"))
    .finally(() => console.log("setLoading"));

    console.log(actualData) 
    console.log(import.meta.env.VITE_API_URL)
}
