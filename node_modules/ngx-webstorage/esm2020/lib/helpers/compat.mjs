export class CompatHelper {
    static isStorageAvailable(storage) {
        let available = true;
        try {
            if (typeof storage === 'object') {
                storage.setItem('test-storage', 'foobar');
                storage.removeItem('test-storage');
            }
            else
                available = false;
        }
        catch (e) {
            available = false;
        }
        return available;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXdlYnN0b3JhZ2Uvc3JjL2xpYi9oZWxwZXJzL2NvbXBhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sWUFBWTtJQUV4QixNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBbUI7UUFDNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUk7WUFDSCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDbkM7O2dCQUNJLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFBQyxPQUFNLENBQUMsRUFBRTtZQUNWLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDbEI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dlYlN0b3JhZ2V9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy93ZWJTdG9yYWdlJztcblxuZXhwb3J0IGNsYXNzIENvbXBhdEhlbHBlciB7XG5cblx0c3RhdGljIGlzU3RvcmFnZUF2YWlsYWJsZShzdG9yYWdlOiBXZWJTdG9yYWdlKTogYm9vbGVhbiB7XG5cdFx0bGV0IGF2YWlsYWJsZSA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICh0eXBlb2Ygc3RvcmFnZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0c3RvcmFnZS5zZXRJdGVtKCd0ZXN0LXN0b3JhZ2UnLCAnZm9vYmFyJyk7XG5cdFx0XHRcdHN0b3JhZ2UucmVtb3ZlSXRlbSgndGVzdC1zdG9yYWdlJyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGF2YWlsYWJsZSA9IGZhbHNlO1xuXHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0YXZhaWxhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiBhdmFpbGFibGU7XG5cdH1cblxufVxuXG4iXX0=