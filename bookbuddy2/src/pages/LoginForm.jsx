const LoginForm = () => {
    const login =(formdata) => {

        const login = async (formData) => {
            const username = formData.get("email")
            const password = formData.get("password")
          const user = {
               email,
                password
         }
           try {
              const {data} = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", user)
              console.log(data)
          } catch (error) {
             console.error(error)
          }
    }    
    }
    return (
        <form action={login}>
            <label>
                Username:
                <input type="text" name="email" />
            </label>
            <label>
                Password:
                <input type="text" name="password" />
            </label>
            <button>Login</button>
        </form>
    )
}

export default LoginForm