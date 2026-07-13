import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return results.map((result) => ({
    status: result.status,
    // If rejected, use result.reason. If the test expects the Error object, 
    // provide the Error object directly, not a string.
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
