const BASE_URL = 'https://notes-api.dicoding.dev/v2';

class NotesApi {
  static async getNotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes`);
      const responseJson = await response.json();

      if (responseJson.status !== 'success') {
        throw new Error(responseJson.message);
      }

      return responseJson.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getArchivedNotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes/archived`);
      const responseJson = await response.json();

      if (responseJson.status !== 'success') {
        throw new Error(responseJson.message);
      }

      return responseJson.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getSingleNote(noteId) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${noteId}`);
      const responseJson = await response.json();

      if (responseJson.status !== 'success') {
        throw new Error(responseJson.message);
      }

      return responseJson.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async createNote(note) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      };

      const response = await fetch(`${BASE_URL}/notes`, options);
      const responseJson = await response.json();

      if (responseJson.status !== 'success') {
        throw new Error(responseJson.message);
      }

      return responseJson.message;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async archiveNote(noteId) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(
        `${BASE_URL}/notes/${noteId}/archive`,
        options,
      );
      const responseJson = await response.json();

      if (responseJson.status !== 'success') {
        throw new Error(responseJson.message);
      }

      return responseJson.message;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async unarchiveNote(noteId) {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(
        `${BASE_URL}/notes/${noteId}/unarchive`,
        options,
      );
      const responseJson = await response.json();

      if (responseJson.status !== 'success') {
        throw new Error(responseJson.message);
      }

      return responseJson.message;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async deleteNote(noteId) {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${BASE_URL}/notes/${noteId}`, options);
      const responseJson = await response.json();

      if (responseJson.status !== 'success') {
        throw new Error(responseJson.message);
      }

      return responseJson.message;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default NotesApi;
