.. You should enable this project on travis-ci.org and coveralls.io to make
   these badges work. The necessary Travis and Coverage config files have been
   generated for you.

.. image:: https://travis-ci.org/exversion/ckanext-related-datasets.svg?branch=master
    :target: https://travis-ci.org/exversion/ckanext-related-datasets

.. image:: https://coveralls.io/repos/exversion/ckanext-related-datasets/badge.png?branch=master
  :target: https://coveralls.io/r/exversion/ckanext-related-datasets?branch=master

.. image:: https://pypip.in/download/ckanext-related-datasets/badge.svg
    :target: https://pypi.python.org/pypi//ckanext-related-datasets/
    :alt: Downloads

.. image:: https://pypip.in/version/ckanext-related-datasets/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-related-datasets/
    :alt: Latest Version

.. image:: https://pypip.in/py_versions/ckanext-related-datasets/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-related-datasets/
    :alt: Supported Python versions

.. image:: https://pypip.in/status/ckanext-related-datasets/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-related-datasets/
    :alt: Development Status

.. image:: https://pypip.in/license/ckanext-related-datasets/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-related-datasets/
    :alt: License

=============
Related Datasets
=============

image:: https://www.exversion.com/ckan-related-datasets.png

Adds related datasets to the footer of every dataset page on a CKAN instance. Give priority to results hosted on your own CKAN site. Powered by <http://www.data-search-engine.com>.


------------
Installation
------------

To install ckanext-related-datasets:

1. Activate your CKAN virtual environment, for example::

     . /usr/lib/ckan/default/bin/activate

2. Install the ckanext-related-datasets Python package into your virtual environment::

     pip install ckanext-related-datasets

3. Add ``related-datasets`` to the ``ckan.plugins`` setting in your CKAN
   config file (by default the config file is located at
   ``/etc/ckan/default/production.ini``).

4. Restart CKAN. For example if you've deployed CKAN with Apache on Ubuntu::

     sudo service apache2 reload


---------------
Config Settings
---------------

Prioritize matches on your own domain by adding this line to your configuration

    ckanext.related_datasets.internal = True


------------------------
Development Installation
------------------------

To install ckanext-related-datasets for development, activate your CKAN virtualenv and
do::

    git clone https://github.com/exversion/ckanext-related-datasets.git
    cd ckanext-related-datasets
    python setup.py develop
    pip install -r dev-requirements.txt


-----------------
Running the Tests
-----------------

To run the tests, do::

    nosetests --nologcapture --with-pylons=test.ini

To run the tests and produce a coverage report, first make sure you have
coverage installed in your virtualenv (``pip install coverage``) then run::

    nosetests --nologcapture --with-pylons=test.ini --with-coverage --cover-package=ckanext.related-datasets --cover-inclusive --cover-erase --cover-tests

