// Login page component
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) window.location.href = '/dashboard';
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input type="email" value={email} onChange={e =&gt; setEmail(e.target.value)} /&gt;
      &lt;input type="password" value={password} onChange={e =&gt; setPassword(e.target.value)} /&gt;
      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}
