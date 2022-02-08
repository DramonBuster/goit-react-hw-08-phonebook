import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContact = createAsyncThunk(
  'contact/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      toast.success('Contacts loaded');
      return data;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contact/add',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success('Contact added');
      return data;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      toast.success('Contact deleted successfully!');
      return id;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);

export const editContact = createAsyncThunk(
  'contact/edit',
  async ({ id, name, phone }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/contacts/${id}`, {
        name,
        phone,
      });
      toast.success('Contact changed');
      return data;
    } catch (error) {
      toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);

export const filterContact = createAction('contact/Filter');
