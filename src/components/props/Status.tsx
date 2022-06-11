type StatusProps = {
  status: 'loading' | 'success' | 'error';
};
function Status({ status }: StatusProps) {
  let message;
  if (status === 'loading') {
    message = 'Loading...';
  } else if (status === 'success') {
    message = 'Data fetched successfully!';
  } else if (status === 'error') {
    message = 'Error fetching data';
  }
  return <h2>Status - {message}</h2>;
}

export default Status;
