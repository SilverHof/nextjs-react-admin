import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
import simpleRestProvider from "ra-data-simple-rest";

const apiUrl = "https://rickandmortyapi.com/api";

const dataProviderCustom = {
  getList: async (resource, params) => {
    const response = await fetch(`${apiUrl}/${resource}`);
    const data = await response.json();

    return {
      data: data.results,
      total: data.results.length,
    };
  },
  getOne: async (resource, params) => {
    const response = await fetch(`${apiUrl}/${resource}/${params.id}`);
    const data = await response.json();

    return {
      data: data,
    };
  },
  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const response = await fetch(`${apiUrl}/${resource}?${stringify(query)}`);
    const data = await response.json();

    return {
      data: data.results,
    };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const response = await fetch(`${apiUrl}/${resource}?${stringify(query)}`);
    const data = await response.json();

    return {
      data: data.results,
    };
  },

  create: async (resource, params) => {
    const response = await fetch(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    const data = await response.json();

    return {
      data: {
        ...params.data,
        id: data.id,
      },
    };
  },

  update: async (resource, params) => {
    const response = await fetch(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    const data = await response.json();

    return {
      data: data,
    };
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const response = await fetch(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    const data = await response.json();
  },

  delete: async (resource, params) => {
    const response = await fetch(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return {
      data: data,
    };
  },

  deleteMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const response = await fetch(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    });
    const data = await response.json();
    return {
      data: data,
    };
  },
};

export default dataProviderCustom;
