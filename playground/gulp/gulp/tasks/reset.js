import del from 'del';

export const reset = () => {
	// return del(app.path.clean);
	return del(['dist/']);
};