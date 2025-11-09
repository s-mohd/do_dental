from setuptools import setup, find_packages
import os

setup(
    name="do_dental",
    version="1.0.0",
    packages=find_packages(),
    include_package_data=True,
    package_data={
        "do_dental": [
            "public/img/*",
        ]
    },
)