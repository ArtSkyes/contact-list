# Contact List

A ReactJS application to manage a contact list with features like creating, updating, and deleting contacts. The project demonstrates component reusability, state management, routing, and HTTP CRUD operations.

## Features

1. **Component Reusability**: Leveraging ReactJS components for modular design.
2. **Smart/Dumb Components**: Encapsulation through container and presentational components.
3. **State Management**: Utilizing React Hooks for state and lifecycle management.
4. **Routing**: Implementing navigation using `react-router-dom`.
5. **Pages**:
   - **Contact List Page**: Displays contacts in table or card view with options to add, edit, or delete.
   - **Customer Information Page**: Displays detailed information about a selected contact.
   - **NotFound Page**: Fallback for invalid routes.
6. **HTTP CRUD Operations**: Managing data using `axios` or `fetch` with JSONPlaceholder as a mock API.
7. **Table and Card Views**: Dual view options for contact display.
8. **Toast Notifications**: Using `react-toastify` for feedback on add, update, and delete actions.
9. **Validation**: Ensuring data integrity with error handling for missing fields.

## Requirements

### Functional Requirements

1. **Component Reusability**: 
   - Design components for list, card view, and modals to maximize reuse.

2. **Smart/Dumb Component Design**:
   - Separate logic-heavy container components (e.g., data fetching, state management) from UI components.

3. **State Management**:
   - Use `useState`, `useEffect`, and other React Hooks to manage state.

4. **Routing**:
   - Set up routing with `react-router-dom`.
   - Implement routes for Contact List Page (`/`), Customer Information Page (`/customer/:id`), and NotFound Page (`/*`).

5. **Pages**:
   - **Contact List Page**: Displays a list of contacts with options to add, edit, and delete.
   - **NotFound Page**: Displays a 404 error message for undefined routes.
   - **Customer Information Page**: Displays detailed information about a specific contact.

6. **HTTP CRUD Operations**:
   - Use JSONPlaceholder (`https://jsonplaceholder.typicode.com/users`) or json-server for mock data.
   - Implement CRUD operations:
     - **Create**: Add a new contact.
     - **Retrieve**: Fetch contact list data.
     - **Update**: Edit an existing contact.
     - **Delete**: Remove a contact.

7. **Table View**:
   - Display a list of contacts with columns for name, email, and contact number.

8. **Card View**:
   - Present contacts in a card layout with name, email, and contact number.

9. **Modals for Adding/Editing Contacts**:
   - Include fields for Name, Contact Number, and Email Address.
   - Provide Cancel and Save buttons.

10. **Action Buttons**:
    - Add, Edit, and Delete buttons for managing contacts.

11. **Notifications**:
    - Use `react-toastify` to display feedback for add, update, and delete actions.

12. **Validation**:
    - Implement form validation to ensure all required fields are entered before submission.

### Technical Requirements

- **React**: Use ReactJS for UI development.
- **React Hooks**: Use `useState`, `useEffect`, and custom hooks.
- **React Router**: Use `react-router-dom` for navigation.
- **HTTP Requests**: Use `axios` or `fetch` for API calls.
- **Toastify**: Use `react-toastify` for notifications.
- **Styling**: Use CSS modules, TailwindCSS, or any preferred library for styling.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contact-list.git
   cd contact-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. (Optional) Run `json-server` for mock API:

   ```bash
   npx json-server --watch db.json --port 5000
   ```

## Usage

1. Navigate to the Contact List Page to view all contacts.
2. Switch between Table View and Card View.
3. Add a new contact using the "Add New Contact" button.
4. Edit or delete existing contacts using action buttons.
5. View detailed information on the Customer Information Page.

## Project Structure

```
contact-list/
├── public/
├── src/
│   ├── components/
│   │   ├── ContactTable.js
│   │   ├── ContactCard.js
│   │   ├── AddEditModal.js
│   │   └── ...
│   ├── pages/
│   │   ├── ContactListPage.js
│   │   ├── CustomerInfoPage.js
│   │   └── NotFoundPage.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Dependencies

- `react`
- `react-router-dom`
- `axios`
- `react-toastify`

## Contributing

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes.
4. Push your branch and open a pull request.

## License

This project is licensed under the MIT License.
