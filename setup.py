from setuptools import setup, find_packages
import os

setup(
    name="do_dental",
    version="0.0.1",
    packages=find_packages(),
    include_package_data=True,
    package_data={
        "do_dental": [
            "public/img/*",
        ]
    },
)