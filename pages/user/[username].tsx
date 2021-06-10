import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const User = () => {
	const router = useRouter();
	const username = router.query.username;
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const getUserInfos = async () => {
			const req = await axios.get(
				`https://api.github.com/users/${username}`
			);
			console.log(req.data);
		};
		getUserInfos();
	}, []);

	useEffect(() => {
		const getUserRepos = async () => {
			const req = await axios.get(
				`https://api.github.com/users/${username}/repos?per_page=100`
			);
			setRepos(req.data);
			console.log(req.data);
		};
		getUserRepos();
	}, []);

	return (
		<div>
			{repos.map((repo) => (
				<li>{repo.id}</li>
			))}
		</div>
	);
};

export default User;
