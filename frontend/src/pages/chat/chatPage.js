import Cookies from "js-cookie";
export default function ChatPage() {
    const token = Cookies.get('token');

    console.log(token);

    // fetch('/경로~', {
    //     headers: {
    //         'Authorization': `Bearer ${token}`
    //     }
    // })
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json();
    //         } else {
    //             throw new Error('Failed to fetch data');
    //         }
    //     })
    //     .then(data => {
    //         console.log('Protected data:', data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
}