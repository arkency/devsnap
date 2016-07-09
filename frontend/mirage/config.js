export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.namespace = 'api/v1';

  this.get('/developers', ({ developers }, request) => {
    return this._paginate(developers, request);
  });

  this.get('/developers/:id');

  this._paginate = function(model, request) {
    const page = Number(request.queryParams.page);
    const perPage = Number(request.queryParams.per_page);
    const recordsCount = model.all().models.length;
    const ids = this._paginatedIdRange(page, perPage, recordsCount);
    const totalPages = Math.ceil(recordsCount / perPage);
    request.mirageMeta = { total_pages: totalPages };
    return model.find(ids);
  };

  this._paginatedIdRange = function(page, perPage, recordsCount) {
    const startOfRange = (page - 1) * perPage + 1;
    let endOfRange = (page - 1) * perPage + perPage;
    if(endOfRange > (recordsCount - 1)) { endOfRange = recordsCount; }
    let ids = [];
    for(let i = startOfRange; i <= endOfRange; i++) {
      ids.push(i);
    }
    return ids;
  };
}
