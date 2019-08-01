import React, { useState } from 'react';

const Login = () => {
	// two passwords for pass confirmation
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const { email, password } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		console.log('Login submit');
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Login</span>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<label htmlFor='email'>Email Address</label>
						<input
							type='email'
							name='email'
							value={email}
							onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							value={password}
							onChange={onChange}
						/>
					</div>

					<input
						type='submit'
						value='Login'
						className='btn btn-primary btn-block'
					/>
				</form>
			</h1>
		</div>
	);
};

export default Login;
