module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/*** <%=pkg.name%>-<%= pkg.version %> <%=grunt.template.today("yyyy-mm-dd")%> ***/\n'
			},
			build: {
				files: [{
					expand: true,
					cwd: 'src/js/',
					src: '**/*.js',
					dest: 'dist/js'
				}]
			}
		},

		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			compress: {
				files: [{
					expand: true,
					cwd: 'src/css/',
					src: '**/*.css',
					dest: 'dist/css'
				}]
			}
		},

		imagemin: {
			// 压缩图片大小
			dist: {
				options: {
					optimizationLevel: 3 //定义 PNG 图片优化水平
				},
				files: [{
	                expand: true,
	                cwd: 'src/images/',
	                src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
	                dest: 'dist/images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
	            }]
			}
		},

		clean: {
			task: {
				src: ['dist/*']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify'); // 压缩js文件
	grunt.loadNpmTasks('grunt-contrib-cssmin'); // 压缩css文件
	grunt.loadNpmTasks('grunt-contrib-imagemin');   // 复制文件夹
	grunt.loadNpmTasks('grunt-contrib-clean');  // 清除文件

	grunt.registerTask('default', ['clean']);
	grunt.registerTask('compress', ['uglify', 'cssmin', 'imagemin']); // 压缩资源
};